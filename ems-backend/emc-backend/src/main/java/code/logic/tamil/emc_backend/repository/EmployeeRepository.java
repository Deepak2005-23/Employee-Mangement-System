package code.logic.tamil.emc_backend.repository;

import code.logic.tamil.emc_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
