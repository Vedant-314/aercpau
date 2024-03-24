import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CompletedStudies from "./Components/CompletedStudies";
import OurStaff from "./Components/OurStaff";
import TAC from "./Components/TAC";
import OnGoingStudies from "./Components/OnGoingStudies";
import MediaGallery from "./Components/MediaGallery";
import ContactUs from "./Components/ContactUs";
import WebLinks from "./Components/WebLinks";
import Uploads from "./Components/Uploads";
import TableSummary from "./Components/TableSummary";
import TableReports from "./Components/TableReports";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cpstudies" element={<CompletedStudies />} />
        <Route path="/ogstudies" element={<OnGoingStudies />} />
        <Route path="/ourstaff" element={<OurStaff />} />
        <Route path="/tac" element={<TAC />} />
        <Route path="/media" element={<MediaGallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/weblinks" element={<WebLinks />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/tables" element={<TableSummary />} />
        <Route path="/tabler" element={<TableReports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
