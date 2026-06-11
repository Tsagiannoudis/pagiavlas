const ContactForm = () => {
    return(
        <section className="w-full bg-[#292727] py-20 min-h-[80vh] flex items-center">
            <div className="max-w-3xl mx-auto px-4 md:px-8 w-full">
                <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
                    <div className="mb-10">
                        <p className="text-red-600 text-lg font-bold mb-2">Επικοινωνία</p>
                        <h2 className="text-white text-3xl md:text-4xl font-black uppercase leading-tight">
                            Στείλτε μας ένα <span className="text-red-600">μήνυμα</span>
                        </h2>
                        <p className="text-gray-400 mt-4">
                            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση σχετικά με το service ή τα ανταλλακτικά της μοτοσυκλέτας σας.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-gray-300 text-sm font-bold uppercase tracking-wider">Όνομα</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Το όνομά σας"
                                    className="bg-[#1A1A1A] border border-white/10 text-white p-4 rounded-lg focus:border-red-600/50 focus:outline-none transition-all placeholder:text-gray-600"
                                    required 
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-gray-300 text-sm font-bold uppercase tracking-wider">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="example@mail.com"
                                    className="bg-[#1A1A1A] border border-white/10 text-white p-4 rounded-lg focus:border-red-600/50 focus:outline-none transition-all placeholder:text-gray-600"
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-gray-300 text-sm font-bold uppercase tracking-wider">Μήνυμα</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                placeholder="Πώς μπορούμε να βοηθήσουμε;"
                                className="bg-[#1A1A1A] border border-white/10 text-white p-4 rounded-lg focus:border-red-600/50 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-red-600 hover:bg-white hover:text-black text-white font-black py-5 rounded-lg  italic transition-all duration-300 shadow-xl shadow-red-600/10"
                        >
                            Αποστολή Μηνύματος
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default ContactForm;