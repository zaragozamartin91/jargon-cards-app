import FirebaseFacade from "./FirebaseFacade"


async function runSampleQuery() {
  const firebaseFacade = new FirebaseFacade()
  const querySnapshot = await firebaseFacade.sampleQuery()
  querySnapshot.forEach((doc) => {
    const result = JSON.stringify(doc.data())
    console.log(`${doc.id} => ${result}`)
    document.getElementById('saple-query-placeholder').textContent = result
  })
}

console.log('Configuring saple-query-button')
document.getElementById('saple-query-button').onclick = () => runSampleQuery()
