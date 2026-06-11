import Image from "next/image";
import Link from "next/link";

const UsedParts = () => {
    return (
    <>
    <section className="py-16 bg-[#eeecec]">

        {/* Main container for the section content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">

            {/* Grid for text and images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12">

                {/* Text Content */}
                <div className="max-w-xl"> 
                <p className="text-red-600 text-lg font-bold">
                    Ανταλλακτικά
                </p>
                <h2 className="text-black text-3xl md:text-4xl font-black uppercase mb-8">
                    Μεταχειρισμενα Ανταλλακτικα
                </h2>
                <p className="text-gray-700"> 
                    Μεγάλη γκάμα μεταχειρισμένων ανταλλακτικών μοτοσυκλετών σε άριστη κατάσταση. Ελέγχονται σχολαστικά για ποιότητα και λειτουργικότητα, προσφέροντας αξιόπιστες λύσεις για την επισκευή ή αναβάθμιση της μοτοσυκλέτας σας. <br />
                    Από κινητήρες και φρένα μέχρι αναρτήσεις και ηλεκτρικά μέρη, έχουμε τα ανταλλακτικά που χρειάζεστε για να διατηρήσετε τη μοτοσυκλέτα σας σε άριστη κατάσταση.
                </p>
                <Link href="https://car.gr" className="inline-block mt-6 px-6 py-3 bg-[#eeecec] text-black font-bold rounded-lg hover:bg-white transition-colors duration-300 border-2 border-red-600">
                    Δείτε τα Ανταλλακτικά μας  {" >"}
                </Link>
            </div>

                {/* Image Gallery */}
                <div className="mt-8 lg:mt-0 grid grid-cols-2 grid-rows-2 gap-4 h-[450px]"> 
                    {/* Main Large Image */}
                    <div className="relative col-span-2 sm:col-span-1 row-span-2 border border-gray-300 rounded-2xl overflow-hidden group">
                        <Image src="/icons/parts3.png" alt="Ανταλλακτικά 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    {/* Secondary Images */}
                    <div className="relative border border-gray-300 rounded-2xl overflow-hidden group hidden sm:block">
                        <Image src="/icons/parts2.png" alt="Ανταλλακτικά 2" fill className="object-scale-down transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="relative border border-gray-300 rounded-2xl overflow-hidden group hidden sm:block">
                        <Image src="/icons/parts1.png" alt="Ανταλλακτικά 3" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default UsedParts;