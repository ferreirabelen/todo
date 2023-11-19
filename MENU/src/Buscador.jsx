import { useState } from "react";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import {Form, InputSelect, ButtonSearch,StyledCalendar,DivCalendar, InputSearch} from "./Styles/Buscador"
import { isSameDay, isBefore } from "date-fns";


function Buscador() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateFinal, setDateFinal] = useState(null);
  const [showStartCalendar, setShowStartCalendar] = useState(false);    // primer calendario
  const [showEndCalendar, setShowEndCalendar] = useState(false);        // segundo calendario

  const formatDate = (date) => {                                        //formatear fecha a como yo la quiero
    return format(date, "yyyy MMM dd");
  };

  const handleStartDateChange = (date) => {                             //se guarda la fecha de inicio
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {                                 //se guarda la fecha final
    if(isBefore(date, startDate)){
      return;
    }
    setEndDate(date);
  };

  

  const handleStartCalendarToggle = () => {                                 //despliegue primer calendario
    setShowStartCalendar(!showStartCalendar);
  };

  const handleEndCalendarToggle = () => {                               //despliegue segundo calendario
    setShowEndCalendar(!showEndCalendar);
  };

  const disabledDates = date =>{
    return startDate && isBefore(date, startDate) && !isSameDay(date,startDate)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);
      setDateFinal(
        <div>
          <p>
            Su fecha de inicio es {formattedStartDate} y su fecha de vuelta es {formattedEndDate}
          </p>
        </div>
      );
    }
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <InputSelect name="" id="">
        <option value="" disabled="">
          ¿A dónde vamos?
        </option>
        <option value="">cuidad 1</option>
        <option value="">cuidad 2</option>
        <option value="">cuidad 3</option>
        <option value="">cuidad 4</option>
      </InputSelect>

      <div>
        <DivCalendar>
          <InputSearch
            type="text"
            value={startDate ? formatDate(startDate) : "dd/mm/aaaa"}
            onClick={handleStartCalendarToggle}
            readOnly
          />
          {showStartCalendar && (
            <StyledCalendar
              value={startDate}
              onChange={handleStartDateChange}
              onClickDay={handleStartCalendarToggle}
            />
          )}
        </DivCalendar>
      </div>
      <div>
        <DivCalendar>
          <InputSearch
            type="text"
            value={endDate ? formatDate(endDate) : "dd/mm/aaaa"}
            onClick={handleEndCalendarToggle}
            readOnly
          />
          {showEndCalendar && (
            <StyledCalendar
              value={endDate}
              onChange={handleEndDateChange}
              onClickDay={handleEndCalendarToggle}
              tileDisabled={disabledDates}
              
            />
          )}
        </DivCalendar>
      </div>
      <ButtonSearch type="submit">Enviar</ButtonSearch>
      {dateFinal && <div>{dateFinal}</div>}
    </Form>
  );
}
export default Buscador;