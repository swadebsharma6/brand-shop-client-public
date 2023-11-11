import faq from '../../assets/images/faq.jpg';

const FAQ = () => {
    return (
        <section className='bg-gray-300 p-10'>
            
            <div className='max-w-6xl mx-auto md:flex gap-4 items-center justify-around'>
                {/*Faq1 */}
                <div className='flex-1'>
                <h3 className='text-4xl font-bold mb-4'>FAQ</h3>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    Which Method of payment do you accept?
                </div>
                <div className="collapse-content"> 
                    <p>Cash: Physical currency, such as coins and banknotes, is a traditional form of payment. It is widely accepted but has become less popular in some transactions due to the rise of digital alternatives.

                    Credit Cards: Credit cards are widely used for both online and in-person transactions. Users can make purchases on credit and pay the balance later, often with added interest.
                    
                    Debit Cards: Debit cards are linked to a user  bank account and deduct funds directly from it when a transaction occurs. They are widely accepted and provide a convenient alternative to cash.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    What About Printers ?
                </div>
                <div className="collapse-content"> 
                    <p>Inkjet Printers:

                    Technology: Inkjet printers create images by propelling droplets of liquid ink onto paper. They are suitable for high-quality photo printing and general document printing.
                    Use Cases: Commonly used for home and office printing, especially for tasks that require color.
                    Laser Printers:
                    
                    Technology: Laser printers use a laser beam to form an electrostatic image on a drum, which attracts toner (powdered ink). The toner is then transferred to the paper and fused with heat.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                   Can you help setup a new Computer ?
                </div>
                <div className="collapse-content"> 
                    <p>Building a computer involves assembling various components to create a functional system. Here is a basic guide on how to build a desktop computer. Keep in mind that specific components may vary based on your requirements and budget.Prepare Your Workspace:

                    Ensure you have a clean, well-lit area to work. Use an anti-static wrist strap to prevent static electricity damage to components.
                    Install the CPU:
                    
                    Follow the motherboard and CPU manual for guidance on installing the CPU into the socket.
                    Install RAM:
                    
                    Insert RAM modules into the motherboard RAM slots. Follow the motherboard manual for proper configuration.
                    Mount the Motherboard:
                    
                    Install the motherboard into the case, securing it with screws.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                   Are All repair done at all my home ?
                </div>
                <div className="collapse-content"> 
                    <p>Repairing items at home can be a cost-effective and satisfying way to extend the life of your belongings. Here are some general tips for DIY (Do It Yourself) home repairs. Keep in mind that the complexity of repairs can vary, and some tasks may require professional assistance.</p>
                </div>
                </div>
                </div>
                {/*Faq1 */}
                <div className='flex-1'>
                <img className='rounded-xl' src={faq} alt="" />
                
                </div>
            </div>
        </section>
    );
};

export default FAQ;