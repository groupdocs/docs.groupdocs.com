$(function () {
    const FEEDBACK_FORM_VERSION = "22.8";
    const FEEDBACK_STATUS_KEY = "groupdocs-feedback-form-status";
    const FEEDBACK_API_ENDPOINT = "https://docs.groupdocs.com/api/feedback";

    var feedbackData = {};
    var $feedback = $(".feedback");

    try {
        feedback_init();
    } catch (e) {
        console.log(e);
    }

    function updateForm() {
        var status = readFeedbackStatus();
        feedbackData = {};
        feedbackData.page = window.location.pathname;
        feedbackData.pageTitle = document.title;
        feedbackData.referrer = document.referrer;
        feedbackData.appVersion = FEEDBACK_FORM_VERSION;

        if (status === "closed") {
            feedback_close();
        }
    }

    function feedback_close() {
        if ($feedback.hasClass("feedback-initial") || $feedback.hasClass("feedback-rating")) {
            saveFeedbackStatus("closed");
        }

        $feedback
            .removeClass("feedback-initial")
            .removeClass("feedback-rating")
            .removeClass("feedback-thank")
            .removeClass("feedback-thank-tell-us-more")
            .removeClass("feedback-comment")
            .removeClass("feedback-animate")
            .addClass("feedback-label");
    }

    function show() {
        $feedback.removeClass("feedback-initial")
            .removeClass("feedback-label")
            .addClass("feedback-rating");

        saveFeedbackStatus("shown");
    }

    function feedback_init() {
        var $feedbackComment = $feedback.find('.feedback_details .feedback_text-input');
        var $feedbackRateValue = $feedback.find('.feedback_details #feedback_rate-input');

        try {
            $feedback.find(".feedback_close").click(function (e) {
                feedback_close();
            });
            $feedback.find(".feedback_positive").click(function (e) {
                send({
                    rateValue: 1
                });
                showThank(true);
            });
            $feedback.find(".feedback_negative").click(function (e) {
                send({
                    rateValue: -1
                });
                showFeedbackCommentForm(-1);
            });
            $feedback.find("#feedback_submit").click(function (e) {
                var message = $feedbackComment.val();
                var rateValue = $feedbackRateValue.val();

                if (!message) {
                    $feedbackComment.addClass("feedback_text-input-validation");
                    return;
                } else {
                    $feedbackComment.removeClass("feedback_text-input-validation");
                }

                send({
                    message: message,
                    rateValue: rateValue
                }, function () {
                    $feedbackComment.val('');
                    $feedbackRateValue.val('');
                });

                showThank(false);
            });
            $feedback.find(".feedback_details-no").click(function (e) {
                showThank(false);
            });
            $feedbackComment.on("input", function () {
                $feedbackComment.removeClass("feedback_text-input-validation");
            });
            $feedbackComment.on("input", function () {
                $feedbackComment.removeClass("feedback_text-input-validation");
            });
            $feedback.find('.feedback_label').click(show);
            $feedback.find('.feedback_link').click(() => showFeedbackCommentForm(1));
            updateForm();
            $feedback.removeAttr('hidden');
        } catch (e) {
            console.log(e);
        }

        function send(values, callback) {
            var data = $.extend({}, feedbackData, values);

            $.ajax({
                type: "POST",
                url: FEEDBACK_API_ENDPOINT,
                data: JSON.stringify(data),
                complete: callback,
                dataType: "json",
                contentType: 'application/json'
            });
        }

        function showThank(tellUsMore) {
            $feedback
                .removeClass("feedback-initial")
                .removeClass("feedback-rating")
                .removeClass("feedback-comment")
                .addClass(tellUsMore ? "feedback-thank-tell-us-more" : "feedback-thank");
        }

        function showFeedbackCommentForm(rateValue) {
            $feedback.removeClass("feedback-initial")
                .removeClass("feedback-rating")
                .removeClass("feedback-thank")
                .removeClass("feedback-thank-tell-us-more");

            $feedback.addClass("feedback-comment");

            $feedbackComment.focus();
            $feedbackRateValue.val(rateValue);
        }
    };

    function saveFeedbackStatus(value) {
        storeValue(FEEDBACK_STATUS_KEY, value);
    }

    function readFeedbackStatus() {
        return readValue(FEEDBACK_STATUS_KEY);
    }

    function storeValue(name, value) {
        sessionStorage.setItem(name, value);
    }

    function readValue(name) {
        const item = sessionStorage.getItem(name);
        return item;
    }
});