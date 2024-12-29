package dev.arjun.ems_backend.service;

import dev.arjun.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(long id);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(long id, EmployeeDto employeeDto);
    void deleteEmployee(long id);
}
