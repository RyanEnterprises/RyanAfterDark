import TypeIt from "typeit-react";

export default () => {
    return (
        <div className="p-10 font-primary font-bold gradientText text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TypeIt
                getBeforeInit={(instance) => {
                    instance
                        .type("Let\'s build something amazing, ")
                        .pause(750)
                        .type("synchronously")
                        .pause(750)
                        .delete(13)
                        .type("cooperatively")
                        .pause(750)
                        .delete(13)
                        .type("simultaneously")
                        .pause(750)
                        .delete(14)
                        .type("successively")
                        .pause(750)
                        .delete(12)
                        .type("together")
                        .pause(2000)
                        .delete(33)
                        .type("Push What\'s Possible.");
                    return instance;
                }}
            />
        </div>
    );
};