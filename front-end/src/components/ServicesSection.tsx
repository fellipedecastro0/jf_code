import { Globe, Layers, PenTool } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web Customizado",
    description:
      "Sites e aplicações web sob medida, construídos com as tecnologias mais modernas para entregar performance e escalabilidade.",
  },
  {
    icon: Layers,
    title: "Criação de Sistemas SaaS",
    description:
      "Plataformas SaaS completas com arquitetura multi-tenant, integrações robustas e infraestrutura pronta para crescer.",
  },
  {
    icon: PenTool,
    title: "Design UI/UX de Alta Conversão",
    description:
      "Interfaces intuitivas e visualmente impactantes, projetadas para converter visitantes em clientes fiéis.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/50 text-sm font-medium text-zinc-400 mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight">
            Soluções que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              impulsionam
            </span>{" "}
            seu negócio
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            Combinamos expertise técnica com design estratégico para entregar produtos digitais de alto impacto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm p-8 hover:border-blue-500/30 hover:bg-zinc-900/50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:border-blue-500/30 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-blue-500/40 to-transparent" />
                  <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-blue-500/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  )
}
