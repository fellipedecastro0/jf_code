import { TeamCard } from "./TeamCard"

const team = [
  {
    name: "Fellipe de Castro",
    role: "Software Engineer",
    image: "/fellipe.png",
    githubUrl: "https://github.com/fellipedecastro0",
  },
  {
    name: "Jhonathan Magalhães",
    role: "Software Engineer",
    image: "/jhonathan.png",
    githubUrl: "https://github.com/Johnn216",
  },
]

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/50 text-sm font-medium text-zinc-400 mb-6">
            A Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight">
            Quem faz a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              JFCode
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            Conheça as pessoas por trás dos projetos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              githubUrl={member.githubUrl}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  )
}
