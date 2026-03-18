import { Github, LinkedinIcon } from "lucide-react"

export interface TeamCardProps {
  name: string
  role: string
  image?: string
  githubUrl?: string
  linkedinUrl?: string
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function TeamCard({
  name,
  role,
  image,
  githubUrl,
  linkedinUrl,
}: TeamCardProps) {
  const initials = getInitials(name)

  return (
    <div className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm p-8 hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border border-zinc-700/50 group-hover:border-blue-500/40 transition-colors flex items-center justify-center bg-gradient-to-br from-zinc-700/80 to-zinc-800/80">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-semibold text-zinc-300 tracking-tight">
                {initials}
              </span>
            )}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-zinc-100">{name}</h3>
        <p className="mt-1 text-sm text-zinc-400">{role}</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/50 hover:bg-zinc-800/50 transition-all"
              aria-label={`GitHub de ${name}`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/50 hover:bg-zinc-800/50 transition-all"
              aria-label={`LinkedIn de ${name}`}
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}