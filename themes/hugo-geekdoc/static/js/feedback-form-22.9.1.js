document.addEventListener("DOMContentLoaded", function (event) {

    const FEEDBACK_FORM_VERSION = "22.9";
    const FEEDBACK_STATUS_KEY = "FEEDBACK-FORM-STATUS";
    const FEEDBACK_STATUS_COMENT_SUBMITTED = "COMMENT-SUBMITTED";
    const FEEDBACK_STATUS_POSITIVE_RATE_VALUE_SET = "POSITIVE-RATE-VALUE-SET";
    const FEEDBACK_STATUS_NEGATIVE_RATE_VALUE_SET = "NEGATIVE-RATE-VALUE-SET";
    const FEEDBACK_API_ENDPOINT = "https://docs.groupdocs.com/api/feedback";

    var feedbackData = {};
    var $feedback = document.querySelector(".feedback");

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
        if ($feedback.classList.contains("feedback-initial")
            || $feedback.classList.contains("feedback-rating")) {
            saveFeedbackStatus("closed");
        }

        $feedback.classList.remove("feedback-initial");
        $feedback.classList.remove("feedback-rating");
        $feedback.classList.remove("feedback-thank");
        $feedback.classList.remove("feedback-thank-tell-us-more");
        $feedback.classList.remove("feedback-comment");
        $feedback.classList.remove("feedback-animate");
        $feedback.classList.add("feedback-label");
    }

    function show() {
        var status = readFeedbackStatus();

        if (status === FEEDBACK_STATUS_POSITIVE_RATE_VALUE_SET) {
            showThank(true);
        } else if (status === FEEDBACK_STATUS_NEGATIVE_RATE_VALUE_SET) {
            showThank(true);
        } else if (status === FEEDBACK_STATUS_COMENT_SUBMITTED) {
            showThank(false);
        } else {
            showRating();
        }
    }

    function feedback_init() {
        var container = document.querySelector(".feedback-container");
        if(!container) {
            return;
        }

        var $feedbackComment = $feedback.querySelector('.feedback_details .feedback_text-input');
        var $feedbackRateValue = $feedback.querySelector('.feedback_details #feedback_rate-input');

        try {
            const closeButtons = $feedback.querySelectorAll(".feedback_close");
            for (let btnIndex = 0; btnIndex < closeButtons.length; btnIndex++) {
                closeButtons[btnIndex].addEventListener("click", feedback_close);
            }
           
            $feedback.querySelector(".feedback_positive").addEventListener("click", function (e) {
                send({
                    rateValue: 1
                }, function () {
                    saveFeedbackStatus(FEEDBACK_STATUS_POSITIVE_RATE_VALUE_SET);
                });
                showThank(true);
            });
            $feedback.querySelector(".feedback_negative").addEventListener("click", function (e) {
                send({
                    rateValue: -1
                }, function () {
                    saveFeedbackStatus(FEEDBACK_STATUS_NEGATIVE_RATE_VALUE_SET);
                });
                showFeedbackCommentForm(-1);
            });
            $feedback.querySelector("#feedback_submit").addEventListener("click", function (e) {
                var message = $feedbackComment.value;
                var rateValue = $feedbackRateValue.value;

                if (!message) {
                    $feedbackComment.classList.add("feedback_text-input-validation");
                    return;
                } else {
                    $feedbackComment.classList.remove("feedback_text-input-validation");
                }

                send({
                    message: message,
                    rateValue: rateValue
                }, function () {
                    $feedbackComment.value = '';
                    $feedbackRateValue.value = '';

                    saveFeedbackStatus(FEEDBACK_STATUS_COMENT_SUBMITTED);
                });

                showThank(false);
            });
            $feedback.querySelector(".feedback_details-no").addEventListener("click", function () {
                showThank(false);
                saveFeedbackStatus(FEEDBACK_STATUS_COMENT_SUBMITTED);
            });
            $feedbackComment.addEventListener("input", function () {
                $feedbackComment.classList.remove("feedback_text-input-validation");
            });
            $feedbackComment.addEventListener("input", function () {
                $feedbackComment.classList.remove("feedback_text-input-validation");
            });
            $feedback.querySelector('.feedback_label').addEventListener("click", show);
            $feedback.querySelector('.feedback_link').addEventListener("click", function () {
                showFeedbackCommentForm(1);
            });
            updateForm();
            $feedback.removeAttribute('hidden');
        } catch (e) {
            console.log(e);
        }

        function send(values, callback) {
            var data = { ...feedbackData, ...values };

            fetch(FEEDBACK_API_ENDPOINT, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(res => {
                if (callback) {
                    callback();
                }
            });
        }

        function showFeedbackCommentForm(rateValue) {
            $feedback.classList.remove("feedback-initial");
            $feedback.classList.remove("feedback-rating");
            $feedback.classList.remove("feedback-thank");
            $feedback.classList.remove("feedback-thank-tell-us-more");

            $feedback.classList.add("feedback-comment");

            $feedbackComment.focus();
            $feedbackRateValue.value = rateValue;
        }
    };

    function showThank(tellUsMore) {
        $feedback.classList.remove("feedback-initial");
        $feedback.classList.remove("feedback-rating");
        $feedback.classList.remove("feedback-comment");
        $feedback.classList.remove("feedback-comment");

        $feedback.classList.add(tellUsMore ? "feedback-thank-tell-us-more" : "feedback-thank");
    }

    function showRating() {
        $feedback.classList.remove("feedback-initial");
        $feedback.classList.remove("feedback-label");

        $feedback.classList.add("feedback-rating");
    }

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