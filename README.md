# UFOs
## Overview of the Analysis
- Our analysis was based on a dataset of reported UFO sightings. The amount of total data was too large and unwieldly for viewing in one place. To alleviate the issue, we created a website with a table that filters the data by the values in the dataset. 

## Results
- To perform a search on the website, you simply type an applicable property value into the given text input boxes and press enter. The property id categories that the dataset can be filtered by are date, city, state, country, and shape

### Example 1
- Webpage Before Filtering
![](readme_images/readme1.png)

### Example 2
- Webpage Filtered By State
![](readme_images/readme2.png)

### Example 3
- Webpage Filtered By Shape
![](readme_images/readme3.png)


## Summary

### Drawbacks
-The website works and does the intended job. There is a drawback to the setup of the site, it requires the user to fill out the fields on their own. This requires precise knowledge of the value names they want to filter by. When it comes to cities and states, it is not terribly difficult to come up with the value names nor to spell them correctly. For shapes on the other hand, it would be difficult to guess there is a shape value called "cigar" or "light".

### Recommendations for Further Development
-One recommedation for improvement, would be to add a drop down menu to filter for shapes. Currently, to filter by shapes, the user must know the names of the various shapes. For example "light" typically is not considered a shape, so it could be difficult to know that is a potential vaule to filter by. The user would likely need to discover this "shape" by filtering for other entries. Another way to improve the website and data would be to clean up the duration values. They are not in uniform formats, so it makes it nearly impossible to make it filterable by them. If you transformed to data into a uniform format, then you could set it as a filterable value. Duration would be a interesting variable to look into.
