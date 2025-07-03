'use client';

export default function TeamShowcase() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Strategy Consultant",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      expertise: "Digital Transformation"
    },
    {
      name: "Michael Chen",
      role: "Business Analyst",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      expertise: "Process Optimization"
    },
    {
      name: "David Rodriguez",
      role: "Technology Lead",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      expertise: "Innovation Strategy"
    },
    {
      name: "Emily Watson",
      role: "Market Research",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      expertise: "Consumer Insights"
    },
    {
      name: "James Mitchell",
      role: "Operations Expert",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      expertise: "Operational Excellence"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of seasoned professionals brings decades of experience 
            across industries to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{member.role}</p>
                  <p className="text-xs opacity-75">{member.expertise}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}