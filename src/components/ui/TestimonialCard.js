export default function TestimonialCard({ quote, name, business, role, image }) {
  return (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-full">
        <div className="mb-4">
          <svg className="w-8 h-8 text-blue-500/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        <p className="text-slate-300 mb-6 leading-relaxed">"{quote}"</p>
        
        <div className="flex items-center gap-3">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-semibold text-white">{name}</div>
            <div className="text-sm text-slate-400">{role || business}</div>
          </div>
        </div>
      </div>
    </div>
  );
}