import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>

	);


	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>Linkedin News</h2>
				<InfoIcon /> 
			</div>

			{newsArticle("Twitter Blue", "Launch Date + New Features")}
			{newsArticle("Next.js 13 + TailWindCSS", "Updates and Improvements")}
			{newsArticle("Nursing", "NICU Nurse named godmother after 6 months")}
			{newsArticle("Bitcoin Breal", "Crypto Readers")}
			{newsArticle("Is Redux too good?", "Redux Daily News")}
			{newsArticle("Nursing", "NICU Nurse named godmother after 6 months")}
		
		</div>
	)
}

export default Widgets
