const cases = [
  {
    id: "gestao-estetica",
    title: "Plataforma de Gestão de Estética",
    image: "https://picsum.photos/seed/estetica/600/360",
    tags: ["React", "Tailwind", "TypeScript"],
  },
  {
    id: "venda-cursos",
    title: "Site de Venda de Cursos",
    image: "https://picsum.photos/seed/cursos/600/360",
    tags: ["React", "Tailwind", "TypeScript"],
  },
]

export function CasesSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/50 text-sm font-medium text-zinc-400 mb-6">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight">
            Cases em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              produção
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            Trabalhos reais que entregamos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {cases.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all duration-300"
            >
              {/* Mockup frame (browser bar) */}
              <div className="relative overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800/50 bg-zinc-900/80">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs text-zinc-500 font-mono">
                      {project.title.toLowerCase().replace(/\s/g, "-")}.web
                    </span>
                  </div>
                </div>
                <div className="aspect-video bg-zinc-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}
