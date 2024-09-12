import images from "./images";


const serviceData = [
    {
        title: "Electrical & Power Systems",
        description: "Ensure reliable and safe electrical systems with our expert services. We provide installation, repair, and maintenance for all types of electrical and power systems, including wiring, circuit breakers, and lighting. Our skilled technicians deliver high-quality solutions to keep your electrical systems running efficiently and securely.",
        imgUrl: images.electrical
    },

    {
        title: "Plumbing, Water & Sewage",
        description: "Our expert plumbing services cover all your needs for water and sewage systems. From leak repairs and pipe installations to complete system overhauls, we ensure efficient and reliable solutions. Our team addresses both routine maintenance and emergency issues to keep your water and sewage systems functioning smoothly and effectively.",
        imgUrl: images.plumbing
    },

    {
        title: "Civil Works & Painting",
        description: "Transform your spaces with our comprehensive civil works and painting services. We handle a wide range of construction and renovation projects, from structural modifications to aesthetic enhancements. Our expert team ensures quality workmanship and attention to detail, delivering durable and visually appealing results for both residential and commercial properties.",
        imgUrl: images.civil
    },

    {
        title: "Locksmith",
        description: "Ensure the security of your property with our professional locksmith services. We offer expert solutions for lock installation, repair, and emergency lockout situations. Whether you need to upgrade your security system or gain access to a locked space, our skilled locksmiths are here to provide reliable and efficient service.",
        imgUrl: images.locksmith
    },

    {
        title: "Air Conditioning or HVAC Systems",
        description: "Stay comfortable year-round with our comprehensive air conditioning and HVAC system services. We specialize in installation, repair, and maintenance, ensuring efficient and reliable climate control for your home or business. Our experts provide tailored solutions to keep your indoor environment perfect in any season.",
        imgUrl: images.airConditioning
    },

    {
        title: "Swimming Pool Maintenance",
        description: "Keep your pool in pristine condition with our expert maintenance services. We handle everything from routine cleaning and water testing to equipment repairs and seasonal preparations, ensuring a safe and enjoyable swimming environment all year round.",
        imgUrl: images.swimming
    },

    {
        title: "Carpentry & Furniture Repairs",
        description: "Our skilled carpenters provide high-quality carpentry services and furniture repairs, ensuring your woodwork is both functional and aesthetically pleasing. From custom-built furniture to restoring worn pieces, we deliver craftsmanship that enhances the beauty and longevity of your home or office furnishings.",
        imgUrl: images.carpentry
    },

    {
        title: "Interior Decorations",
        description: "Transform your space with our expert interior decoration services. We create stylish and personalized designs that reflect your taste and enhance the aesthetics of your home or office. From color schemes to furniture selection, our team ensures every detail is perfect, bringing your vision to life with elegance and functionality.",
        imgUrl: images.interior
    },

    {
        title: "Cleaning & Fumigation Services",
        description: "Our professional team offers thorough cleaning and fumigation services to maintain a pristine and hygienic environment. Whether it's routine cleaning, deep cleaning, or pest control, we tailor our services to meet the specific needs of your home or business, ensuring a safe and spotless space.",
        imgUrl: images.cleaning
    },

    {
        title: "Gardening & Landscaping",
        description: "Transform your outdoor space with our expert gardening and landscaping services. From designing lush gardens to maintaining pristine lawns, we create beautiful, sustainable landscapes tailored to your vision.",
        imgUrl: images.gardening
    },

    {
        title: "Home Electronics",
        description: "Enhance your living space with our professional home electronics services. We specialize in the installation, repair, and maintenance of various electronic devices, ensuring seamless functionality and convenience in your home.",
        imgUrl: images.homeElectronics
    },

    {
        title: "Office Equipment",
        description: "Our expert technicians provide comprehensive services for office equipment, including installation, repair, and maintenance. We ensure your office runs smoothly with well-functioning printers, copiers, computers, and other essential devices.",
        imgUrl: images.officeEquipment
    },

    {
        title: "Safety & Security Systems",
        description: "Our Safety & Security System provides comprehensive protection for your property, combining advanced technology with real-time monitoring to ensure a secure environment. From intrusion detection and surveillance to emergency response integration, we deliver reliable solutions tailored to meet your safety needs, giving you peace of mind 24/7."
    },

    {
        title: "ICT or Internet Services",
        description: "Our ICT & Internet Services offer fast, reliable connectivity and tailored IT solutions to keep your business running smoothly. From high-speed internet access to network setup and managed services, we ensure seamless communication, enhanced productivity, and secure data management, all backed by expert technical support."
    },

    {
        title: "Catering & Event Management Services",
        description: "Our Catering & Event Management Services provide a full-service experience, from exquisite catering tailored to your preferences to seamless event planning and execution. Whether it's a corporate gathering, wedding, or special occasion, we ensure every detail is handled with professionalism and creativity, delivering unforgettable experiences for you and your guests."
    },

    {
        title: "Kitchen Appliances",
        description: "Our Kitchen Appliances offer innovative, energy-efficient solutions designed to enhance your cooking experience. From state-of-the-art ovens and refrigerators to versatile small appliances, we provide high-quality products that combine functionality, style, and durability, making your kitchen both modern and efficient."
    },

    {
        title: "Waste Management & Environmental Services",
        description: "Our Waste Management & Environmental Services provide eco-friendly solutions for efficient waste disposal, recycling, and environmental sustainability. We offer tailored services for residential, commercial, and industrial needs, ensuring proper waste handling, pollution reduction, and compliance with environmental regulations, helping to create cleaner and greener communities."
    },

    {
        title: "Warehousing Logistics and Relocation Services",
        description: "Our Warehousing, Logistics, and Relocation Services deliver comprehensive solutions for managing and optimizing your supply chain. We offer secure storage, efficient inventory management, and streamlined logistics to ensure timely and accurate delivery. Additionally, our relocation services handle all aspects of moving and setting up operations, ensuring a smooth transition with minimal disruption to your business."
    },

    {
        title: "Home Furniture",
        description: "Our Home Furniture Services offer a seamless experience for selecting, customizing, and installing furniture in your home. From expert design consultations to personalized recommendations and professional setup, we ensure that every piece fits perfectly with your style and space, making your home both beautiful and functional."
    },

    {
        title: "Housekeeping or Domestic Supports",
        description: "Our Housekeeping & Domestic Support services transform your home into a haven of cleanliness and order. We provide reliable and efficient cleaning, organizing, and general support, tailored to fit your unique needs and schedule. Let us handle the chores so you can enjoy a sparkling home and more free time for the things you love!"
    },

    {
        title: "Serviced Offices and Apartments",
        description: "Our Serviced Offices and Apartments offer turnkey solutions for your business and living needs. Enjoy fully furnished, modern workspaces with flexible leases and on-site amenities, or opt for stylish, all-inclusive apartments with exceptional comfort and convenience. Whether you’re looking for a professional environment or a hassle-free home, we provide the perfect space to suit your lifestyle."
    },

    {
        title: "Renewable Energy Solutions",
        description: "Our Renewable Energy Solutions harness the power of sustainable resources to provide efficient, eco-friendly energy for your needs. From solar and wind power systems to cutting-edge energy storage, we offer customized solutions that reduce your carbon footprint and lower energy costs, while supporting a greener future."
    },

    {
        title: "Pickup & Delivery",
        description: "Our Pickup & Delivery services streamline the process of transporting goods with convenience and reliability. Whether you need items collected from your location or delivered to a destination, we ensure timely and secure handling, offering flexible scheduling and real-time tracking to meet your logistics needs efficiently."
    },

    {
        title: "Facility Inspection Service",
        description: "Our Facility Inspection Service provides thorough, detailed evaluations of your property to ensure safety, compliance, and operational efficiency. Our expert inspectors assess systems, structures, and equipment, identifying potential issues and recommending solutions to enhance performance and maintain high standards."
    },

    {
        title: "Training & Consultancy",
        description: "Our Training & Consultancy services empower individuals and organizations with expert guidance and tailored education. We offer comprehensive training programs and strategic consultancy to enhance skills, optimize processes, and drive growth. From professional development workshops to strategic business advice, we deliver actionable insights and hands-on learning to help you achieve your goals."
    },

    {
        title: "Welding, Aluminium & Glazing Works",
        description: "Our Welding, Aluminium & Glazing Works provide top-notch craftsmanship for a variety of metal and glass needs. We specialize in precision welding, custom aluminium fabrications, and expert glazing solutions, delivering high-quality, durable results for both structural and decorative applications. Whether you’re enhancing your space or repairing critical components, our skilled team ensures exceptional performance and aesthetic appeal."
    },



]

const reasonData = [
    {
        img: images.wallet,
        title: "Earn More",
        text: "Increase your transactions, access new customers - with no marketing budget."
    },

    {
        img: images.digital,
        title: "Go Digital",
        text: "Stop paying shop rent, remove all restrictions with Call2Fix."
    },

    {
        img: images.efficacy,
        title: "Run More Efficiently",
        text: "Create wealth for your employees, reduce idle time."
    },

    {
        img: images.globe,
        title: "Become Global",
        text: "Partner with Alpha Mead, operate with global standard."
    }
]

const faqs = [
    {
        question: "Who is a  Service Provider on Call2Fix?",
        answer: "A Service Provider is an individual or company who has the human, equipment and financial capacity and capability to provider service in any of the service categories on Call2Fix."
    },

    {
        question: "Can I be a Service Provider without a registered company?",
        answer: "Yes. So long as you meet all pre-qualification criteria. However, Call2Fix will encourage you to register your company within your first six months on the platform."
    },

    {
        question: "What are Service categories on Call2Fix?",
        answer: "The Service Category include: Electrical & Electronics, Plumbing, Carpentry, Electronic Security & Fire Alarms Systems, Generator Maintenance, HVAC/Air Conditioning, Building & Civil works, etc."
    },

    {
        question: "Can I register to provide service in more than one service category?",
        answer: "Yes. However, you must have been pre-qualified for the category. In case, you have not been pre-qualified, you will inform our team who will pre-qualify and add you to more categories on successful completion of your pre-qualification."
    },

    {
        question: "Do I need to pay any registration fee?",
        answer: "No. Registration on Call2Fix is free."
    },

    {
        question: "What's the minimum number of artisans to begin?",
        answer: "Minimum number of artisans you can register is three. At no time can a service provider have less than three artisans on their account."
    },

    {
        question: "Can an artisan on my network register independently as an artisan?",
        answer: "No. An artisan on a Service Provider’s network but wishes to be registered on Call2Fix independently will first relinquish his or her position with the service provider."
    },

    {
        question: "How do you guarantee security and impersonation?",
        answer: "On registration of artisan, the system generates a unique code that links individual artisan to their Service provider. This code, in addition to the artisan’s image is what the customer receives when they are assigned an artisan. The customer has a duty to check this code to ensure it matches with the artisan’s when the artisan arrives at the job site."
    },

    {
        question: "Can cash payment be made to the artisan or service provider",
        answer: "No. All Call2Fix transactions are done on the application wallet."
    },

    {
        question: "How does the transaction work?",
        answer: "On arrival at the job site, the customer is charged a pre-set fee. The artisan then goes on to assess the issue. If it doesn’t require materials, the artisan fixes the issue and the customer is charged a fee. If it requires materials, the artisan quote for the job via the app. The quote goes to the Service Manager at Call2Fix and the customer. Once the customer accepts the quote, the sum is deducted from his/her account."
    },

    {
        question: "How do you guarantee customers?",
        answer: "There is a clear gap in the market for this service. Call2Fix is therefore committing huge resources to ensure that awareness is created for this product to fill the gap. This marketing communication, being carried out by one of Nigeria’s leading Marketing Communications companies, is aimed at bringing more customers for our service providers. We take care of the marketing spend, you get the job. It’s that straightforward."
    }
]

const categoryData = {
    "Electrical & Power Systems": ["Maintenance & Repairs"],
    "Plumbing, Water & Sewage": ["Maintenance & Repairs"],
    "Civil Works & Painting": ["Maintenance & Repairs"],
    "Locksmith": ["Maintenance & Repairs"],
    "Air Conditioning or HVAC Systems": ["Maintenance & Repairs"],
    "Swimming Pool Maintenance": ["Maintenance & Repairs"],
    "Carpentry & Furniture Repairs": ["Maintenance & Repairs"],
    "Interior Decorations": ["Maintenance & Repairs"],
    "Cleaning & Fumigation Services": ["Maintenance & Repairs"],
    "Gardening & Landscaping": ["Maintenance & Repairs"],
    "Home Electronics": ["Furniture & Appliances"],
    "Office Equipment": ["Furniture & Appliances"],
    "Safety & Security Systems": ["Maintenance & Repairs"],
    "ICT or Internet Services": ["Maintenance & Repairs"],
    "Catering & Event Management Services": ["Logistics & Events"],
    "Kitchen Appliances": ["Furniture & Appliances"],
    "Waste Management & Environmental Services": ["Maintenance & Repairs"],
    "Warehousing Logistics and Relocation Services": ["Logistics & Events"],
    "Home Furniture": ["Furniture & Appliances"],
    "Housekeeping or Domestic Supports": ["Maintenance & Repairs"],
    "Serviced Offices and Apartments": ["Logistics & Events"],
    "Renewable Energy Solutions": ["Maintenance & Repairs"],
    "Pickup & Delivery": ["Logistics & Events"],
    "Facility Inspection Service": ["Maintenance & Repairs"],
    "Training & Consultancy": ["Maintenance & Repairs"],
    "Welding, Aluminium & Glazing Works": ["Maintenance & Repairs"]
}


export default { reasonData, faqs, categoryData, serviceData }