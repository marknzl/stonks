import React, { useState, useEffect } from 'react';
import IUserInput from '../../shared/IUserInput';
import ICompanyProfileResponse from '../../shared/ICompanyProfileResponse';
import './CompanyProfile.css';

function StockInfo(props: IUserInput) {
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const [companyProfile, setCompanyProfile] = useState<ICompanyProfileResponse | null>();

    useEffect(() => {
        setSearchQuery(props.searchQuery);

        fetch(`https://sandbox.iexapis.com/stable/stock/${props.searchQuery}/company?token=${process.env.REACT_APP_SANDBOX_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                let profile: ICompanyProfileResponse = {
                    companyName: response["companyName"],
                    exchange: response["exchange"],
                    industry: response["industry"],
                    website: response["website"],
                    description: response["description"]
                };

                setCompanyProfile(profile);
            });
    },[props.searchQuery]);

    if (searchQuery !== "") {
        return (
            <div>
                <h2>Company profile:</h2>

                <p>Company name: {companyProfile?.companyName}</p>
                <p>Traded on: {companyProfile?.exchange}</p>
                <p>Industry: {companyProfile?.industry}</p>
                <p>Website: {companyProfile?.website}</p>
                <p>Description: {companyProfile?.description}</p>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default StockInfo;