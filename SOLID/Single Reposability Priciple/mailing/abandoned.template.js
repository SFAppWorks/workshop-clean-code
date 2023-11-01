module.exports = function (data) {
    return {
        subject: `${data.name} has abandoned their application`,
        text: `${data.name} has no activity on their application in the last hour.
                    You can contact ${data.name} at ${data.email}.`,
        template: 'abandoned',
        recipient: 'sales@poorman.com',
        cc: data.cc
    }
}