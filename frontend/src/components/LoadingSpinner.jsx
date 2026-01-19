const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <p className="text-gray-600 font-outfit text-sm">Loading...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner