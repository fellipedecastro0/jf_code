import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { TeamCard } from "./TeamCardProps"

type TeamMember = {
  name: string
  role: string
  image: string
  githubUrl: string
  linkedinUrl?: string
  bio: string
  stack: string[]
}

const team: TeamMember[] = [
  {
    name: "Fellipe de Castro",
    role: "Software Engineer",
    image: "/fellipe.png",
    githubUrl: "https://github.com/fellipedecastro0",
    bio:
      "Sou estudante de Engenharia de Software no 3º semestre e desenvolvedor focado em back-end Java com Spring. No dia a dia, trabalho com Java, Spring Boot, SQL/PostgreSQL e Docker, além de construir interfaces com HTML, TypeScript e React enquanto evoluo no front-end. Gosto de entender o negócio do cliente e sou bastante proativo, sempre buscando melhorar a arquitetura e a qualidade do código.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "SQL", "Docker", "HTML", "TypeScript", "React"],
  },
  {
    name: "Jhonathan Magalhães",
    role: "Software Engineer",
    image: "/jhonathan.png",
    githubUrl: "https://github.com/Johnn216",
    bio:
      "Sou estudante de Engenharia de Software no 3º semestre e atuo como desenvolvedor com foco em Java e Spring Boot, construindo APIs e integrações estáveis. Tenho experiência com SQL/PostgreSQL, Docker e HTML, e estou aprendendo TypeScript e React para trabalhar de forma mais completa no front-end. Gosto de resolver problemas de forma colaborativa e tenho interesse especial em boas práticas e escalabilidade.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "SQL", "Docker", "HTML", "TypeScript", "React"],
  },
]

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const lastFocusedElementRef = useRef<HTMLElement | null>(null)

  function handleOpen(member: TeamMember) {
    lastFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setSelectedMember(member)
  }

  function handleClose() {
    setSelectedMember(null)
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus()
    }
  }

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
              linkedinUrl={member.linkedinUrl}
              onClick={() => handleOpen(member)}
            />
          ))}
        </div>
      </div>

      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={handleClose}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  )
}

type TeamMemberModalProps = {
  member: TeamMember
  onClose: () => void
}

function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
      "button, a, input, textarea, select, [tabindex]:not([tabindex='-1'])",
    )
    firstFocusable?.focus()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-modal-title"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950/95 p-6 sm:p-8 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-zinc-800 bg-zinc-900/80 p-1.5 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
          aria-label="Fechar detalhes do membro da equipe"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start sm:gap-6">
          <div className="mb-4 sm:mb-0">
            <div className="h-28 w-28 overflow-hidden rounded-2xl border border-zinc-700">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3
              id="team-member-modal-title"
              className="text-2xl font-semibold text-zinc-100"
            >
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-400">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{member.bio}</p>

            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Tecnologias
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {member.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700/70 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Ver GitHub
              </a>
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
                >
                  Ver LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
