const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
}

function myClickHandler(this: HTMLButtonElement, event: Event, b: number) {
    this.disabled = true;
}