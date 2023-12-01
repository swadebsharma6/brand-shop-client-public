import { DiApple } from "react-icons/di";
import { FcProcess, FcServices, FcSettings } from "react-icons/fc";

const Optimaized = () => {
    return (
        <section className="max-w-6xl mx-auto my-16">
        <div className="my-6">
        <h2 className="text-5xl font-bold text-primary text-center mb-3">Services We.re <span className="text-secondary">Provide</span></h2>
        <p className="text-center font-bold">Choose Your Favorite One</p>
        </div>


            <div className="grid  md:grid-cols-4 gap-4">
                <div className="border border-secondary-focus rounded-xl p-10 ">
                    <DiApple className="text-6xl"></DiApple>
                   <h3 className="text-3xl font-bold">Optimization</h3>
                </div>
                <div className="border border-primary-focus rounded-xl p-10 ">
                <FcSettings className="text-6xl"></FcSettings>
                <h3 className="text-3xl font-bold">Setup & Install</h3>
                </div>
                <div className="border border-primary-focus rounded-xl p-10 ">
                <FcServices className="text-6xl"></FcServices>
                <h3 className="text-3xl font-bold">Best Service</h3>
                </div>
                <div className="border border-secondary-focus rounded-xl p-10 ">
                 <FcProcess className="text-6xl"></FcProcess>
                <h3 className="text-3xl font-bold">Virus Removal</h3>
                </div>
            </div>
        </section>
    );
};

export default Optimaized;