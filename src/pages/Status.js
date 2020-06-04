//@flow

import React from "react";
import {useParams} from "react-router";

export default function Status() {
	const {reqId} = useParams()
	return (<div> Status {reqId}</div>);
}