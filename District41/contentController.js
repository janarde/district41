function contentController() {
    var what = { question: "What is District 41?",
                 answer : "<p>District 41 is a service entity of Alcoholics Anonymous. We represent and serve AA members in Magnolia, Queen Anne, and South Lake Union of Seattle Washington.</p>"
    };

    var when = { question: "When is the District 41 meeting?",
                 answer: "<p>We meet the second Wednesday of every month from 6:00pm - 7:30pm.</p>"
    };

    var where = { question: "Where is the District 41 meeting?",
                  answer: "<p>Denny Park Lutheran Church<br>766 John Street<br>Seattle, WA. 98109</p>"
    };

    var why = { question: "Why is District 41 valuable to AA members?",
                answer: "<p>When AA group-elected General Service Representatives (GSRs) share information about their groups at the District meeting, we are able to help each other develop unity within the Fellowship. Also, we forward your group conscience to the Area Delegate, who attends the annual AA General Service Conference and votes on major proposals that affect the entire AA Fellowship. District 41 is your link to having a voice in Alcoholics Anonymous as a whole.</p>"
    };

    var how = { question: "How is District 41 serving the AA primary purpose?",
                answer: "<p>Our purpose is to carry the AA message to the alcoholic who still suffers. District 41 assists groups and members in serving this purpose. We work through committees to reach alcoholics outside of our meetings: jails and other correctional facilities, treatment centers, professionals who encounter alcoholics, and the public.</p>"
    };

    var who = { question: "Who is involved in District 41?",
                answer: "<p>In addition to group-elected GSRs, the District Committee is made up of officers and standing committee chairs. Our officers are trusted servants elected by the GSRs; they are responsible to the groups and do not govern. Beyond the District Committee, AA members from all over Seattle are involved in our various service committees. District 41 has a place for any alcoholic who is interested in service. <br><h3>District Committee Officers:</h3><br><div class='content'><ul class='bullet-list'><li> GSRs</li><li> Alt. GSRs</li><li>DCM</li><li> Alt. DCM</li><li> Treasurer</li><li>Secretary</li></ul></div><br><h3> District Committee Chairs:</h3><br><div class='content'><ul class='bullet-list'><li>Accessibility</li><li>Archives</li><li>Cooperation with Professional Community (CPC)</li><li>Corrections </li><li>Grapevine & Literature</li><li>Public Information (PI)</li><li>Treatment</li><li>Web</li><li>Intergroup Liaison</li></ul></div><p>"
    };

    var that = this;
    $(document).ready(function() {
        $("#district-info").hide();
        $('.dropdown-toggle').dropdown();
        $("#info-btn-close").click(function() {
            $("#district-info").hide();
        });
    });    
}

var cc = new contentController();
