

/*
create 3 buttons:
a.Promise fetch
b.Asynch/Await fetch
c.Reactive fetch
when each is clicked you will make a request to https://randomuser.me/api/ and return a Json object whith name and loaction
 */

function usingPromise() {
    const data = fetch('https://randomuser.me/api/')

        .then(data => { return data.json() })

        .then(data => console.log(data.results.map(x => ({ 'Name': x.name, 'Location': x.location }))))

        .catch(error => console.error(error));
};


async function usingasynAwait() {
    try {
        let results = await usingPromise;
        results();
    } catch (error) {
        console.log(error);
    }
}

function usingReact() {

    const { from } = rxjs;
    const { flatMap, map } = rxjs.operators;
    const data = fetch('https://randomuser.me/api/');

    from(data)
        .pipe(

            flatMap(x => x.json()),

            map(y => y.results.map((x) => ({ 'name': x.name, 'location': x.location })))
)

        .subscribe(

            (x) => console.log(x)

        )

};

console.log("Answer of second exercise of Day 1");
$(document).ready(function () {
    $("#promise").click(usingPromise);
    $("#asynAwait").click(usingasynAwait);
    $("#reactive").click(usingReact);
}
);