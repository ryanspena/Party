new Team().initializeTeam()
    .then(data => writeFile(generatePage(data)))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse.message)
    })
    .catch(err => console.log(err));