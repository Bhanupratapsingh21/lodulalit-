export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Big Title */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Amazing Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make our product stand out from the crowd
          </p>
        </div>
      </section>

      {/* First Section - 3 Images with Text Titles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-4xl">🚀</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Experience blazing fast performance with our optimized architecture and cutting-edge technology stack.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-4xl">🔒</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Secure & Safe
              </h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security measures and end-to-end encryption.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-4xl">💡</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Smart AI
              </h3>
              <p className="text-gray-600">
                Intelligent features powered by advanced AI that learns and adapts to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Another 3 Images with Text Titles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Advanced Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Comprehensive analytics and insights to help you make data-driven decisions.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-4xl">🔄</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Real-time Sync
              </h3>
              <p className="text-gray-600">
                Seamless synchronization across all your devices in real-time.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-4xl">🌍</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Global Access
              </h3>
              <p className="text-gray-600">
                Access your work from anywhere in the world with cloud-based infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Mobile Experience
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Beautiful and intuitive mobile interface designed for on-the-go productivity
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Mobile Screenshot 1 */}
            <div className="text-center">
              <div className="bg-gray-900 rounded-3xl p-4 mb-4 mx-auto max-w-[200px] shadow-2xl">
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl h-64 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Dashboard</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Clean Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Overview of all your important metrics
              </p>
            </div>

            {/* Mobile Screenshot 2 */}
            <div className="text-center">
              <div className="bg-gray-900 rounded-3xl p-4 mb-4 mx-auto max-w-[200px] shadow-2xl">
                <div className="bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl h-64 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Analytics</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Live Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Real-time data and insights
              </p>
            </div>

            {/* Mobile Screenshot 3 */}
            <div className="text-center">
              <div className="bg-gray-900 rounded-3xl p-4 mb-4 mx-auto max-w-[200px] shadow-2xl">
                <div className="bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl h-64 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Profile</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                User Profile
              </h3>
              <p className="text-gray-600 text-sm">
                Manage your account settings
              </p>
            </div>

            {/* Mobile Screenshot 4 */}
            <div className="text-center">
              <div className="bg-gray-900 rounded-3xl p-4 mb-4 mx-auto max-w-[200px] shadow-2xl">
                <div className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl h-64 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Messages</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Messaging
              </h3>
              <p className="text-gray-600 text-sm">
                Stay connected with your team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}