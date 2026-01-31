export default function GradientCard({ icon: Icon, title, description, gradient }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-[2px] hover:scale-105 transition-transform duration-300 h-full`}>
      <div className="relative h-full bg-slate-900 rounded-2xl p-8 backdrop-blur-xl flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon className="w-12 h-12 text-white mb-4 relative z-10" />
        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{title}</h3>
        <p className="text-slate-300 leading-relaxed relative z-10 flex-grow">{description}</p>
      </div>
    </div>
  );
}