var viewModel = {
    topics : ko.observableArray(['What is District 41?', 'When is the District 41 meeting?', 'Where is the District 41 meeting?', 'Why is District 41 valuable to AA members?', 'How is District 41 serving the AA primary purpose?', 'Who is involved in District 41?']),
    selectedTopic : ko.observable("What is District 41?")
};
ko.applyBindings(viewModel);
