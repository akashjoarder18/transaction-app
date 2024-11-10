// components/DownloadButton.js
const DownloadButton = ({path}) => {
    const handleDownload = () => {
      // Specify the path to your CSV file in the public directory
      const filePath = path;
      
      // Create a temporary anchor element to initiate the download
      const link = document.createElement('a');
      link.href = filePath;
      link.download = 'data.csv'; // Specify the file name for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Download CSV
      </button>
    );
  };
  
  export default DownloadButton;
  
