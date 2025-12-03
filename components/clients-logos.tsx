"use client"

const clients = [
  { name: "TechStart", logo: "TS" },
  { name: "GreenLeaf", logo: "GL" },
  { name: "StyleHub", logo: "SH" },
  { name: "Roberts Co", logo: "RC" },
  { name: "CloudNine", logo: "C9" },
  { name: "FinServe", logo: "FS" },
  { name: "MediaMax", logo: "MM" },
  { name: "DataFlow", logo: "DF" },
]

export function ClientsLogos() {
  return (
    <section className="py-12 border-y border-purple-500/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-wider">
          Trusted by innovative companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400/40 transition-colors">
                <span className="text-sm font-bold text-white">{client.logo}</span>
              </div>
              <span className="text-gray-300 font-medium hidden sm:block">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
