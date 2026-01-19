import { create } from 'zustand';
import { apiClient } from '../api/apiClient';

export const useBoardStore = create((set, get) => ({
  // State
  currentBoard: null,
  boardId: null,
  tasks: [],
  selectedTask: null,
  isDrawerOpen: false,
  isLoading: false,
  error: null,
  initialized: false,

  // Actions
  initializeBoard: async (boardId = null) => {
    const { initialized } = get();
    if (initialized) return;
    
    set({ isLoading: true, error: null, initialized: true });
    
    if (boardId) {
      // Load existing board
      try {
        await get().fetchBoard(boardId)
      } catch (error) {
        // Board not found, create new one
        const newBoardId = await get().createBoard()
        window.history.replaceState(null, '', `/board/${newBoardId}`)
      }
    } else {
      // Check localStorage for existing board
      const savedBoardId = localStorage.getItem('currentBoardId')
      if (savedBoardId) {
        try {
          await get().fetchBoard(savedBoardId)
          window.history.replaceState(null, '', `/board/${savedBoardId}`)
        } catch (error) {
          // Saved board not found, create new one
          const newBoardId = await get().createBoard()
          localStorage.setItem('currentBoardId', newBoardId)
          window.history.replaceState(null, '', `/board/${newBoardId}`)
        }
      } else {
        // First visit, create new board
        const newBoardId = await get().createBoard()
        localStorage.setItem('currentBoardId', newBoardId)
        window.history.replaceState(null, '', `/board/${newBoardId}`)
      }
    }
  },
  createBoard: async () => {
    try {
      const response = await apiClient('/api/boards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      set({ 
        currentBoard: response.board, 
        boardId: response.board._id,
        tasks: response.tasks,
        isLoading: false 
      });
      localStorage.setItem('currentBoardId', response.board._id);
      return response.board._id;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchBoard: async (id) => {
    try {
      const board = await apiClient(`/api/boards/${id}`);
      set({ 
        currentBoard: board, 
        boardId: id,
        tasks: board.tasks,
        isLoading: false 
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  updateBoard: async (data) => {
    const { boardId } = get();
    try {
      const board = await apiClient(`/api/boards/${boardId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      set({ currentBoard: board });
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  addTask: async (taskData) => {
    const { boardId, tasks } = get();
    try {
      const task = await apiClient('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...taskData, boardId })
      });
      set({ tasks: [...tasks, task] });
      return task;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  updateTask: async (id, data) => {
    const { tasks } = get();
    try {
      const task = await apiClient(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      set({ 
        tasks: tasks.map(t => t._id === id ? task : t),
        selectedTask: task
      });
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  deleteTask: async (id) => {
    const { tasks } = get();
    try {
      await apiClient(`/api/tasks/${id}`, { method: 'DELETE' });
      set({ 
        tasks: tasks.filter(t => t._id !== id),
        selectedTask: null,
        isDrawerOpen: false
      });
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  openDrawer: (task = null) => {
    set({ selectedTask: task, isDrawerOpen: true });
  },

  closeDrawer: () => {
    set({ selectedTask: null, isDrawerOpen: false });
  },

  clearError: () => set({ error: null })
}));