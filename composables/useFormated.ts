export default function () {
    const difInDays = ref(0);

    const daysElapsed = (date: Date) => {
        const currentDate = new Date().getTime();
        const difInMiliseconds = currentDate - date.getTime();

        difInDays.value = Math.floor(
            difInMiliseconds / (1000 * 60 * 60 * 24)
        );
    };
    return { daysElapsed, difInDays };
}