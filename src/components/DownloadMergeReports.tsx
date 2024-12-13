import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { BetaDisclaimer } from './BetaDisclaimer'
import { RegisterDownload } from './RegisterDownload'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

const DownloadMergeReports = () => {
	const downloadLink = 'https://github.com/ADAMHUMPHRIES-123/SwoodDocs/raw/master/public/assets/MergeReports.exe'
	const appVersion = '0.0.0'

	const [open, setOpen] = useState(false)
	// const [email, setEmail] = useState('')
	// const [isEmailValid, setIsEmailValid] = useState(false)

	const handleClickOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleAgree = async () => {
		setOpen(false)

		try {
			await RegisterDownload('MergeReportsDownloads', appVersion, 'download_MergeReports')
			// Trigger the download after registration is complete
			window.location.href = downloadLink
		} catch (error) {
			console.error('Error during registration: ', error)
		}
	}

	return (
		<>
			<Box display="flex" justifyContent="center" className="imageBox">
				<Button variant="outlined" size="large" color="info" onClick={handleClickOpen} endIcon={<CloudDownloadIcon />}>
					Download MergeReports v{appVersion}
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>MergeReports Disclaimer</DialogTitle>
				<DialogContent>
					<BetaDisclaimer />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleAgree} color="primary" autoFocus>
						Agree
					</Button>
					<Button onClick={handleClose} color="primary">
						Disagree
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default DownloadMergeReports
