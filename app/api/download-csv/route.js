import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  try {
    const csvFilePath = path.join(process.cwd(), 'public', 'files', 'your-file.csv'); // Change this path to your CSV file location

    // Check if the file exists
    if (!fs.existsSync(csvFilePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Set headers to trigger a download in the browser
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=your-file.csv');

    // Read the file and send it as a response
    const fileStream = fs.createReadStream(csvFilePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}