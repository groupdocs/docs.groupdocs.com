(function () {
  
    // Loads actual package info (lib version) and updates html
    const libInfoDownloader = {
        net: {
    
            getInfo: function(productName){
                
            return fetch('https://api-v2v3search-0.nuget.org/query?q=packageid:GroupDocs.'+ productName)
            .catch((error) => {
                console.log(error)
            })    
            .then(response => {
                if (!response) return null;
                return response.json()})
            .then(info => {
                if (!info) return null;
                return { 'version': info.data[0].version, 'downloads': info.data[0].totalDownloads}});
    
            }
        },
        java: {

            getInfo: function(productName) {
                const metadataUrl = 'https://releases.groupdocs.com/java/repo/com/groupdocs/groupdocs-'+productName+'/maven-metadata.xml';

                console.log('Trying to fetch from ' + metadataUrl);
                
                return fetch(metadataUrl)
                .catch((error) => {
                    console.log(error)
                })
                .then(response => { 
                    if (!response) return null;
                    return response.text()})
                .then(text => {
                    
                    console.log('Data fetched. Parsing data.');

                    if (!text) return null;
                    const xml = new DOMParser().parseFromString(text, 'application/xml');
                    const verEl = xml.querySelector('metadata versioning release');
                    
                    console.log('Return results.');
                    
                    return { 
                        'version': verEl.textContent, 
                        'downloads': 0, 
                        'url': 'https://releases.groupdocs.com/java/repo/com/groupdocs/groupdocs-' + productName + '/'+ verEl.textContent + '/'
                    };
                    
                });
              
            }

        }
    
    }

function updateLibInfo(platform, product){
    
    if (!platform || !product || libInfoDownloader[platform] == undefined)
        return;

    const data = libInfoDownloader[platform].getInfo(product).then(data=>{        
        if(!data)
            return;

            
        // version download url
        const packageLink = document.querySelector('.release-version-link');
        if (packageLink)
        {
            packageLink.href = data.url;
        }

        // version under buttons
        const versionEl = document.querySelector('.release-version-number');
        if (versionEl)
        {
            versionEl.textContent = versionFormatter(data.version);
        }


        // version month and year
        const versionMonth = document.querySelector('.release-version-month');
        if (versionMonth)
        {
            const chunks = data.version.split('.');
            var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            var selectedMonthName = months[Number(chunks[1])-1];

            versionMonth.textContent = '('+ selectedMonthName +' 20' + chunks[0] + ')';
        }
        
        // 
        // version in maven xml
        if (platform === 'java'){
            const browserCodeEl = document.querySelector('.release-version-number');
            if (browserCodeEl)
            {
                browserCodeEl.textContent =  browserCodeEl.textContent.replace(/<version>.+<\/version>/g, '<version>' + data.version + '</version>');
            }
        }
               
    });

}

function versionFormatter(version){
    let ver = version;
    if (ver.endsWith('.0'))
        ver = ver.slice(0, -2);
    return ver;

}

function init(){

    // reading platform, product from Url
    const segments = window.location.pathname.split('/');
    const startIndex = (segments[1].length < 3) ? 2 : 1; // exclude 2-letters language
 
    const product = segments[startIndex];
    const platform = segments[startIndex + 1];

    console.log('product: ' + product);
    console.log('platform: ' + platform);

    updateLibInfo(platform, product);
}

init();

}());