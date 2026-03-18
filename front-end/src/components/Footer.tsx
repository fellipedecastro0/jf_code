import { useState, FormEvent } from "react"
import { Send } from "lucide-react"

export function Footer() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const emailTrimmed = email.trim()
    if (!emailTrimmed) {
      setEmailError(true)
      return
    }
    setEmailError(false)
    setSubmitted(true)
    setNome("")
    setEmail("")
    setMensagem("")
  }

  return (
    <footer id="contato" className="relative bg-zinc-950 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Formulário de orçamento */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/50 text-sm font-medium text-zinc-400 mb-4">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Solicite um orçamento
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Preencha o formulário e retornaremos em breve.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-zinc-400 mb-1.5">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-lg border border-zinc-700/50 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError) setEmailError(false)
                }}
                placeholder="seu@email.com"
                className={`w-full px-4 py-3 rounded-lg border bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 transition-colors ${
                  emailError
                    ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
                    : "border-zinc-700/50 focus:ring-blue-500/50 focus:border-blue-500/50"
                }`}
                aria-invalid={emailError}
                aria-describedby={emailError ? "email-erro" : undefined}
              />
              {emailError && (
                <p id="email-erro" className="mt-1.5 text-sm text-red-400">
                  Preencha seu e-mail para enviar.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-zinc-400 mb-1.5">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Conte sobre seu projeto..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-zinc-700/50 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-zinc-100 font-semibold text-base px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
            >
              Enviar
              <Send className="w-4 h-4" />
            </button>

            {submitted && (
              <p className="text-sm text-green-400">
                Mensagem enviada! Entraremos em contato em breve.
              </p>
            )}
          </form>
        </div>

        {/* Direitos autorais */}
        <div className="text-center pt-8 border-t border-zinc-800/50">
          <p className="text-sm text-zinc-500">
            © 2026 Agência XYZ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
