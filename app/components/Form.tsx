"use client";

export function Form() {
  return (
    <article className="form bg-gray-50 mt-8">
      <h2 className="text-3xl font-medium text-center py-5 px-1 rounded m-2">
        📝 Formulaire de contact
      </h2>

      <section className="flex flex-col gap-4 p-8">
        <p>
          Vous pouvez nous contacter via ce formulaire, nous vous répondrons dans les plus brefs
          délais.
        </p>

        <div className="mx-auto max-w-screen-sm bg-white p-8 rounded-lg shadow-lg">
          <form action="https://formspree.io/f/xbjvnprj" method="POST" className="space-y-4">
            <input
              type="hidden"
              name="_subject"
              value="Nouveau message d'un client - Food truck location"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border-2 rounded-lg duration-150 hover:border-black">
                <label className="sr-only" htmlFor="email">
                  Votre email: *
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Votre email *"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="border-2 rounded-lg duration-150 hover:border-black">
                <label className="sr-only" htmlFor="phone">
                  Téléphone <small>(facultatif):</small>
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Téléphone (facultatif)"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>

            <div className="border-2 rounded-lg duration-150 hover:border-black">
              <label className="sr-only" htmlFor="social">
                LinkedIn <small>(facultatif):</small>
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="LinkedIn (facultatif)"
                type="text"
                id="social"
                name="social"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Écrivez votre message ici:
              </label>

              <textarea
                className="w-full min-h-[150px] text-sm p-3 border-2 border-gray-200 rounded-lg duration-150 hover:border-black"
                placeholder="Écrivez votre message ici..."
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full sm:w-auto bg-black px-5 font-medium text-white py-3 border-2
              border-black rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                J{"'"}envoie le message
              </button>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}
