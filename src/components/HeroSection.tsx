import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-sm font-medium text-zinc-400">
                Engenharia de Software Moderna
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
              Engenharia de Software de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Alta Performance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              De Landing Pages elegantes a sistemas SaaS complexos e escaláveis. 
              Construímos soluções digitais que impulsionam o crescimento do seu negócio 
              com código limpo e arquitetura robusta.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#contato"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-zinc-100 font-semibold text-base px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                Iniciar Projeto
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                className="group border border-zinc-700/50 bg-zinc-900/30 backdrop-blur-sm text-zinc-100 font-semibold text-base px-8 py-3 rounded-lg hover:bg-zinc-800/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <Play className="h-4 w-4 text-blue-400" />
                Ver Cases
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-800/50 pt-8">
              {[
                { value: "50+", label: "Projetos Entregues" },
                { value: "99%", label: "Satisfação" },
                { value: "5+", label: "Anos de Mercado" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Terminal Visual */}
          <div className="relative lg:pl-8 group cursor-default">
            <div className="relative">
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Main terminal card (AQUI ESTÁ O HOVER) */}
              <div className="relative rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-xl p-1 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:border-blue-500/30">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/50 transition-colors duration-500 group-hover:border-zinc-700/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-zinc-500 font-mono transition-colors duration-500 group-hover:text-zinc-400">terminal</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">projeto</span>
                      <span className="text-zinc-500">=</span>
                      <span className="text-zinc-100">{"{"}</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      <div>
                        <span className="text-zinc-500">nome:</span>
                        <span className="text-green-400 ml-2">{'"Sua Ideia"'}</span>
                        <span className="text-zinc-500">,</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">stack:</span>
                        <span className="text-amber-400 ml-2">{'["Next.js", "TypeScript"]'}</span>
                        <span className="text-zinc-500">,</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">status:</span>
                        <span className="text-blue-400 ml-2">{'"em_desenvolvimento"'}</span>
                        <span className="text-zinc-500">,</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500">sucesso:</span>
                        <span className="text-purple-400 ml-2">true</span>
                      </div>
                    </div>
                    <div className="text-zinc-100">{"};"}</div>
                    
                    {/* Blinking cursor line */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800/30 transition-colors duration-500 group-hover:border-zinc-700/50">
                      <span className="text-purple-400">await</span>
                      <span className="text-blue-400">JFCode</span>
                      <span className="text-zinc-500">.</span>
                      <span className="text-zinc-100">build</span>
                      <span className="text-zinc-500">(</span>
                      <span className="text-zinc-100">projeto</span>
                      <span className="text-zinc-500">)</span>
                      <span className="w-2 h-5 bg-blue-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  )
}