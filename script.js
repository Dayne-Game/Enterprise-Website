function doConfirm(msg, yesFn, noFn) {
    var confirmBox = $("#confirmBox");
    confirmBox.find("Go home").text(msg);
    confirmBox.find(".yes,.no").unbind().click(function() {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(yesFn);
    confirmBox.find(".no").click(noFn);
    confirmBox.show();
}