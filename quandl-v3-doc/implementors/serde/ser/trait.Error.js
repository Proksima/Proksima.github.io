(function() {var implementors = {};
implementors["csv"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Error.html\" title=\"trait serde::ser::Error\">SerdeError</a> for <a class=\"struct\" href=\"csv/struct.Error.html\" title=\"struct csv::Error\">Error</a>",];
implementors["reqwest"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Error.html\" title=\"trait serde::ser::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Error.html\" title=\"trait serde::ser::Error\">Error</a> for <a class=\"enum\" href=\"serde_urlencoded/ser/enum.Error.html\" title=\"enum serde_urlencoded::ser::Error\">Error</a>",];
implementors["serde"] = [];
implementors["serde_json"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Error.html\" title=\"trait serde::ser::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>",];
implementors["serde_urlencoded"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Error.html\" title=\"trait serde::ser::Error\">Error</a> for <a class=\"enum\" href=\"serde_urlencoded/ser/enum.Error.html\" title=\"enum serde_urlencoded::ser::Error\">Error</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
