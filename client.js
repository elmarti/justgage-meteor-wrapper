Template.JustGage.onRendered(function() {
    let self = this;
    this.autorun(function() {
        let thisGage = {};
        Object.keys(self.data.gage).forEach(function(key) {
            thisGage[key] = self.data.gage[key];
        });
        if (self.data.renderedGage == undefined)
            self.data.renderedGage = new JustGage(thisGage);
        else
            self.data.renderedGage.refresh(self.data.gage.value);
        console.log(self.data);
    })
})