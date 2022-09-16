import Link from "next/link";

const Footer = () => {

    const d = new Date();

    const year = d.getFullYear();
    return (
        <div className="align-center text-center">
            <div className=" flex justify-center ">
                <div className=" px-3 py-3 mb-3 ml-3 mr-3" >
                    <a href="https://twitter.com/S_U_R_Y_A_N_S_H"><img height="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" /></a>


                </div>
                <div className="px-3 py-3 mb-3 ml-3 mr-3">
                    <a href="https://www.linkedin.com/in/suryansh-chandel-6a3436201/">
                        <img height="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    </a>
                </div>
                <div className="px-3 py-3 mb-3 ml-3 mr-3">
                    <a href="https://github.com/Suri2904">
                        <img height="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                </div>
            </div>
            <div className="text-xl text-white font-semibold pb-3 mb-3">
                <p>©️ {year} </p>
            </div>
            <div className="text-xl text-white  font-semibold pb-3 mb-3">
                <p>Made with ❤️ by Suryansh </p>
            </div>
        </div>
    )




}

export default Footer;