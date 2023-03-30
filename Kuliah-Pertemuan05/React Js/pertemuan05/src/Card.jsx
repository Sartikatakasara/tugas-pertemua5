function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-purple-500 to-purple-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Registrasi
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                            <label
                                class="mb-2 font-bold text-lg text -gray-900"
                                for="NIK"
                            >
                                NIK
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="NIK"
                                id="naam"
                            />
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Alamat"
                            >
                                Alamat
                            </label>
                            <input
                                class="broder py-2 px-3 text-grey-800"
                                type="text"
                                name="Alamat"
                                id="naam"
                            />
                        </div>
                        <button
                        class="block bg-purple-400 hover:bg-purple-600 text-white uppercase text-lg mx-auto p-4 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;