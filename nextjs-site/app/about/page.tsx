

export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-mgs-menu shadow-lg p-8 border border-mgs-border">
        <div className="grid grid-cols-[auto_1fr] gap-4">
        <img src="/portriat.jpeg" className="w-48 h-auto"/>
        <p className="text-2xl text-mgs-dark mb-6 leading-relaxed">
          My name is Alex Fulop. 
          I build scalable full stack web applications and microservices to integrate with existing systems on the web. 
          Recent work includes developing a platform for legal case management, designing microservices to sync 
          client business data across multiple CRM platforms, and building websites with automated content syndication features 
          for publishing podcasts and video content. You can reach me at <a href="mailto:bumpsites@gmail.com">bumpsites@gmail.com</a>
        </p>
        </div>
      </div>
    </div>
    )
}