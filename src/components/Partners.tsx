import { motion } from 'framer-motion';

export default function Partners() {
    return (
        <section className="py-32 bg-white border-t border-slate-100">
            <div className="container px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg font-bold uppercase tracking-widest text-slate-500 mb-20"
                >
                    Trusted by Industry Leaders
                </motion.p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {/* Tese.io */}
                    <a href="https://tese.io" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/tese.png"
                            alt="Tese.io"
                            className="h-14 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* scrollengine.com - Invert to make it dark on white bg */}
                    <a href="http://scrollengine.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/scrollengine.png"
                            alt="scrollengine.com"
                            className="h-10 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* OGOW Health */}
                    <a href="https://ogowhealth.com/en/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/ogow.png"
                            alt="OGOW Health"
                            className="h-16 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* iSOFT - Now with actual logo */}
                    <a href="https://www.isoftinc.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/isoft.png"
                            alt="iSOFT"
                            className="h-12 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* IIT Patna Incubation Centre */}
                    <a href="https://iciitp.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/iit-patna-ic.png"
                            alt="IIT Patna Incubation Centre"
                            className="h-20 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* DPIIT - Startup India */}
                    <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/dpiit.png"
                            alt="DPIIT - Startup India"
                            className="h-14 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* Indian Railways */}
                    <a href="https://indianrailways.gov.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/indian-railways.png"
                            alt="Indian Railways"
                            className="h-20 w-auto object-contain transition-all duration-300"
                        />
                    </a>

                    {/* Cyfiniti Labs */}
                    <a href="https://www.linkedin.com/company/cyfinitilabs/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                        <img
                            src="/assets/partners/cyfiniti-labs.png"
                            alt="Cyfiniti Labs"
                            className="h-14 w-auto object-contain transition-all duration-300"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
