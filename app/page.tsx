import Image from 'next/image'

export default function JokerFeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Big Title */}
      <section className="py-16 text-center bg-gradient-to-br from-purple-100 to-red-50">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🤡 Joker's Prateek's Features 🃏
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Why so serious? Discover features that'll make you laugh maniacally!
          </p>
        </div>
      </section>

      {/* First Section - 3 Images with Text Titles */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            🎭 chutiya h muh marta rahta h ladkiyo prr
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-64 flex items-center justify-center transform hover:scale-105 transition">
                <Image
                  src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468589/IMG_20251117_230210_071_hinflo.jpg"
                  alt="Crazy Fast"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Sorry baby
              </h3>
              <p className="text-gray-600">
                maaf kar doo naa maine nhi rah sakta hu tumhare binaaaa
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-64 flex items-center justify-center transform hover:scale-105 transition">
                <Image
                  src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468588/IMG_20251117_230212_893_dkhccj.jpg"
                  alt="Joker's Security"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Sorry baby 2
              </h3>
              <p className="text-gray-600">
                plss kaaan pakad kr maafi leeta hu plss
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-64 flex items-center justify-center transform hover:scale-105 transition">
                <Image
                  src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468588/IMG_20251116_221700_508_iejyzy.jpg"
                  alt="Circus AI"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                sorry yrr plss maine mar jaaogaa
              </h3>
              <p className="text-gray-600">
                ek no kaa chutiya h yh
              </p>
            </div>
          </div>
           <div className='mt-16'>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
           kiss do kiss do photo doo snap bhj doo plss dekhe kr delete kr duga aise bolta h loduuu
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
           or bolta h raat ko maire enary levels high rahte h ek no ka chutiya h mcc
          </p>
           </div>
        </div>
      </section>



      {/* Mobile Screenshots Section */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            📱 Joker anjaan choti bachiyo se jo 18+ se kam h onsse aise baat krta h dekhoo
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            chutiya h ek no kaa loduuuu
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mobile Screenshot 1 */}
            <div className="text-center transform hover:scale-105 transition">
              <div className="bg-gradient-to-br from-purple-900 to-pink-800 rounded-3xl p-4 mb-4 mx-auto max-w-[360px] shadow-2xl border-4 border-yellow-400">
                <div className="bg-white rounded-2xl h-auto flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468589/Screenshot_20251118-174724_ggvcul.png"
                    alt="Crazy Dashboard"
                    width={180}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>

            {/* Mobile Screenshot 2 */}
            <div className="text-center transform hover:scale-105 transition">
              <div className="bg-gradient-to-br from-green-900 to-teal-800 rounded-3xl p-4 mb-4 mx-auto max-w-[360px] shadow-2xl border-4 border-green-300">
                <div className="bg-white rounded-2xl h-auto flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468578/Screenshot_20251118-175055_xqx9xr.png"
                    alt="Prank Central"
                    width={180}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>

            {/* Mobile Screenshot 3 */}
            <div className="text-center transform hover:scale-105 transition">
              <div className="bg-gradient-to-br from-red-900 to-orange-800 rounded-3xl p-4 mb-4 mx-auto max-w-[360px] shadow-2xl border-4 border-red-300">
                <div className="bg-white rounded-2xl h-auto flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468589/Screenshot_20251118-175032_hlikzl.png"
                    alt="Victim Profiles"
                    width={180}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>

            {/* Mobile Screenshot 4 */}
            <div className="text-center transform hover:scale-105 transition">
              <div className="bg-gradient-to-br from-blue-900 to-purple-800 rounded-3xl p-4 mb-4 mx-auto max-w-[360px] shadow-2xl border-4 border-blue-300">
                <div className="bg-white rounded-2xl h-auto flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhvkjanwa/image/upload/v1763468587/Screenshot_20251118-175052_slbuwr.png"
                    alt="Bat Avoidance"
                    width={180}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Aware to this type of chutiyas girls plss 🤪
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            also ladkiyo ko bolta h yh astologer h mehakaal kaa bhakt h loaudaa
          </p>
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition">
              ek no kaa gandu h
            </button>
            <button className="border-2 border-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition">
              lodu h bsdkaa
            </button>
          </div>
          <p className="text-yellow-300 mt-6 text-sm">

          </p>
        </div>
      </section>
    </div>
  )
}