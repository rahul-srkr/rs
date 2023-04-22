import AnimatedText from "@/components/AnimatedText"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Layout from "@/components/Layout"
import Skills from "@/components/Skills"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef } from "react"
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import TransitionEffect from "@/components/TransitionEffect"

const Animatenumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInview = useInView(ref, { once: true })

    useEffect(() => {
        if (isInview) {
            motionValue.set(value)
        }
    }, [isInview, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            console.log(latest);
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose" className="mb-16 lg:!text-5xl md:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex-col flex items-center justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to life.
                            </p>
                            <p className="font-medium my-4">
                                I believe that design is about more than just making things look pretty – it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className="font-medium">
                                Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem] dark:bg-light  sm:rounded-[1.4rem]" />
                            <Image src={profilePic} alt="codebucks" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col justify-center items-end xl:items-center">
                                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                                    <Animatenumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                            </div>
                            <div className="flex flex-col justify-center items-end xl:items-center">
                                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                                    <Animatenumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                            </div>
                            <div className="flex flex-col justify-center items-end xl:items-center">
                                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                                    <Animatenumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>

            </main>
        </>
    )
}
export default About