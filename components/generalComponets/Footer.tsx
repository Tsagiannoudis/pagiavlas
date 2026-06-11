import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <>
        <footer className="text-white py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start max-w-7xl mx-auto px-2 md:px-8">
                <div>
                    <Image src="/logos/logo-tran.webp" alt="Παγιαυλάς - Εξειδικευμένο Service και ανταλλακτικά μοτοσυκλετών" width={250} height={100} className="mb-6" />
                </div>

                <div>
                    <h2 className="text-base font-bold mb-4 uppercase tracking-wider text-red-600">Γρηγοροι Συνδεσμοι</h2>
                    <ul className="text-sm">
                        <li>
                            <Link href="/" className="hover:underline">Αρχική</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">Σχετικά</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">Υπηρεσίες</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:underline">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Επικοινωνία</Link>
                        </li>
                    </ul>  
                </div>

                <div>
                    <h2 className="text-base font-bold mb-4 uppercase tracking-wider text-red-600">Υπηρεσιες</h2>
                    <ul className="text-sm">
                        <li>
                            <Link href="/services" className="hover:underline">Τακτικό Service</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Φρένα - Αναρτήσεις</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">Διαγνωστικός Έλεγχος</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">Επισκευές Κινητήρα</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">Μετατροπές - Βελτιώσεις</Link>
                        </li>
                    </ul>  
                </div>


                <div>
                    <h2 className="text-base font-bold mb-4 uppercase tracking-wider text-[#ff000d]">Επικοινωνια</h2>
                    <ul className="text-sm">
                        <li>
                            <Link href="https://maps.app.goo.gl/dhU5RwM9R9cBxMv76" className="hover:underline">Αγίας Σοφίας 13, Ταύρος Αττικής 17778</Link>
                        </li>
                        <li>
                            <Link href="mailto:info@pagiavlas.gr" className="hover:underline">pagiavlas@gmail.com</Link>
                        </li>
                        <li>
                            <Link href="tel:+302101234567" className="hover:underline">210-1234567</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Δευτέρα - Παρασκευή: 09:00 - 18:00</Link>
                        </li>
                    </ul>  
                </div>
                
                <div className="w-full h-48">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.4785235817935!2d23.702626799999997!3d37.96596050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bcf08df89673%3A0x8aea5048abeb696a!2zJyfOo86kzpXOm86Zzp_OoyDOoM6RzpPOmc6RzqXOm86RzqMnJyBTRVJWSUNFIM6czp_OpM6fICYgUEFSVFM!5e0!3m2!1sel!2sgr!4v1781033406727!5m2!1sel!2sgr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Τοποθεσία συνεργείου Παγιαυλάς στο Google Maps"
                    ></iframe>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 mt-12 pt-8 border-t border-white/10 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Παγιαυλάς. All rights reserved.</p>
                    <p className="text-sm text-gray-400">Powered by <Link href="https://tsagiannoudis.gr/" className="hover:underline hover:text-red-600">tSagian Projects.</Link></p>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <Link href="/terms" className="hover:underline">Όροι Χρήσης</Link>
                        <Link href="/privacy" className="hover:underline">Πολιτική Απορρήτου</Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
        
    );
};

export default Footer;